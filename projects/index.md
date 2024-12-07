---
layout: default
title: "Dragon Quest"
---

<h1>{{ page.title }}</h1>
<ul class="blog-posts">
  {% for project in site.projects %}
    <li class="post-item">
      <a href="{{ project.url }}">{{ project.title }}</a>
    </li>
  {% endfor %}
</ul>