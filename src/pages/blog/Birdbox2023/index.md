---
author: "Jonatan Holmgren"
layout: "../../../layouts/BlogLayout.astro"
title: "Birdbox 2023"
date: "2023-05-21"
draft: false
description: "Yet another, marginally better birdbox, now with 24/7 public live streaming"
cover: "https://jontes.page/images/birdbox2023/setup.webp"
categories: [
    "Birdbox"
]
tags: [
    "birdbox",
]
---

> See the page: [jontes.page/Birdbox2023](https://jontes.page/Birdbox2023)

I decided on building yet another birdbox, only slightly modifying the hardware of the 2021 one.

TLDR: I simply modified the software and added a Wifi antenna.

If you want to, feel free to watch this YouTube video I made about the topic: [youtu.be/VMYSum1HH5c](https://www.youtube.com/watch?v=VMYSum1HH5c)

So how'd we build this fella? Well, at first I tried connecting a Raspberry Pi Zero with a noir camera to an external WiFi antenna in a plastic bag and calling it a day, but the Zero wasn't cutting it. I needed to run a Gunicorn Flask server and serve high res images afterall (more about this later). I wrote this simple python code, and this is what I run on the pi to this day.

Nginx Config: [here](https://gist.github.com/Jontes-Tech/47af23acda3e85b749ec62eb801ad64c)
Custom code: [here](https://gist.github.com/Jontes-Tech/d255f050ba2b67a329bb5201d113af11)

## The hardware
I instead opted to run the Pi Zero 2 w, which may be a bit overpowered, but it felt right. Here's a picture of the physical setup:
<img src="/blog/Birdbox2023/exterior.webp" alt="The exterior of the picture" class="h-96">

We used to have a 10 amp hour powerbank, but now we're trippling that and mounting them externally for easier access. It lasts for about 4 days now.

In heinsight I could've simply used like an ESP-Cam behind NGINX and called in a day, but I wanted to do minimal modifications to the hardware, not to scare the birds.