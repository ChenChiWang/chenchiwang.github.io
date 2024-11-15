---
layout: default
title: "德國生活部落格"
---

<h1>{{ page.title }}</h1>
<ul class="blog-posts">
  {% for post in site.posts %}
    <li class="post-item">
      <a href="{{ post.url }}">{{ post.title }}</a> - <span>{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
</ul>

