---
layout: layout.njk
title: "Test-call-data"
tags: ['blog', 'css']
---

<div class="container">
  <h1>This is may test</h1>
  <div class="vibe"> You are the best!</div>
  <div class = "love">
      <h4>Love you</h4>
  </div>

<ul>
{% for article in newsdata.articles %}
  <li>
  <p>{{ article.title }}</p>
  <span>{{ article.description }}</span>
  </li>
{% endfor %}
</ul>

</div>