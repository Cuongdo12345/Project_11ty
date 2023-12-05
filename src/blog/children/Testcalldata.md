---
title: "Test-call-data"
# tags: ['blog', 'css']
# tags:
#  -blog
#  -css
---

<div class="container">
  <h1>This is may test</h1>
  <div class="vibe"> You are the best!</div>
  <div class = "love">
      <h4>Love you</h4>
  </div>

<ul>
{% for article in newsdata[0].articles %}
  <li>
    <h4><a href="{{article.url}}">{{article.title}}</a></h4>
    <span>{{article.source.name}} - <time>{{article.publishedAt}}</time></span>
  <!-- <p>{{ article.title }}</p> -->
  <!-- <span>{{ article.description }}</span> -->
  </li>
{% endfor %}
</ul>



</div>