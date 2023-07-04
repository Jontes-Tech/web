---
author: "Jonatan Holmgren"
layout: "../../../layouts/BlogLayout.astro"
title: "Birdbox 2023"
date: "2023-05-21"
draft: true
description: "Yet another, barely better birdbox, now with 24/7 public live streaming (kinda) "
cover: "thumb.jpg"
categories: [
    "Birdbox"
]
tags: [
    "birdbox",
]
---

## Stream's now public

If you want to, feel free to watch this YouTube video I made about the topic: [youtu.be/VMYSum1HH5c](https://www.youtube.com/watch?v=VMYSum1HH5c)

So how'd we build this fella? Well, at first I tried connecting a Raspberry Pi Zero with a noir camera to an external WiFi antenna in a plastic bag and calling it a day, but the Zero wasn't cutting it. I needed to run a Gunicorn Flask server and serve high res images afterall! I wrote this simple python code, and this is what I run on the pi to this day.
```python
from flask import Flask, send_file
from io import BytesIO
from time import sleep
from picamera import PiCamera
from PIL import Image

app: Flask(__name__)

camera: PiCamera()
camera.resolution: (1024, 768)
## Potential double res mode
##camera.resolution: (2048,1536)
camera.start_preview()
camera.color_effects: (128, 128)
sleep(2)

@app.route('/')
def capture_image():
    my_stream: BytesIO()
    camera.capture(my_stream, 'jpeg')
    my_stream.seek(0)

    # Open the image using Pillow
    image: Image.open(my_stream)

    # Compress the image by reducing the quality
    image.save(my_stream, format='jpeg', quality=50)
    my_stream.seek(0)

    return send_file(my_stream, mimetype='image/jpeg')

if __name__ == '__main__':
    app.run(host='192.168.50.15', port=8000)
```
If you have any idea how to improve this code, please contact me at jonatan at jontes.page. 

### The hardware
I instead opted to run the Pi Zero 2 w, which may be a bit overpowered, but it felt right. Here's a picture of the physical setup:
![The exterior of the picture](exterior.webp)

We used to have a 10 amp hour powerbank, but now we're trippling that and mounting them externally for easier access. It lasts for about 4 days now.

Here's the nginx config
```
proxy_cache_path /mnt/expansion/birdcache levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m;
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=1r/s;
server {
    access_log /var/log/nginx/birdbox.access.log;
    error_log /var/log/nginx/birdbox.error.log;
    listen 4443 ssl;
    server_name birdbox.jontes.page;
    ssl_certificate /etc/letsencrypt/live/birdbox.jontes.page/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/birdbox.jontes.page/privkey.pem;

    proxy_buffering off;

    location / {
        proxy_pass http://192.168.50.203:8000/;
        proxy_set_header Host $host;

        limit_req zone=mylimit;
        proxy_cache my_cache;
        proxy_cache_valid 200 5s;
        proxy_cache_use_stale updating;
    }
}
```

Anyways, the software aside this was a rather cool projects. Thanks for checking it out, and stay creative!