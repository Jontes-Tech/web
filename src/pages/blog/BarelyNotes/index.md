---
author: "Jonatan Holmgren"
layout: "../../../layouts/BlogLayout.astro"
title: "BarelyNotes, a notes tool that doesn't suck"
date: "2023-05-27"
description: "Ever wanted to take some notes, but didn't want to use a clunky notes app?"
categories: [
    "Software"
]
tags: [
    "barelynotes",
    "notes"
]
---

## What's barely notes?
Barely notes is a notes app, that does its job and nothing else. No nonsense, basically. All in one line of bash. To install, simple add this to your shellrc:  
`alias barelynotes="mkdir -p Documents/barelyNotes && $EDITOR Documents/barelyNotes/$(date +%Y-%m-%d).txt; echo 'Saved to Documents/barelyNotes/$(date +%Y-%m-%d).txt'"`  
You can ofcourse change the directory it saves in, simply by changing the 3 places it's in.

Please leave your thoughts in the comments.