---
layout: default
title: "Augenblick"
---

<h1>{{ page.title }}</h1>
<ul class="blog-posts">
  {% for page in site.pages %}
    <li class="post-item">
      <a href="{{ pages.url }}">{{ pages.title }}</a>
    </li>
  {% endfor %}
</ul>