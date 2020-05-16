---
layout: default
title: Stories
---
{% include head.html %}

{% for post in site.posts  %}
    {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% capture this_month %}{{ post.date | date: "%B" }}{% endcapture %}
    {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
    {% capture next_month %}{{ post.previous.date | date: "%B" }}{% endcapture %}

    {% if forloop.first %}
    <h2 id="{{ this_year }}-ref">{{this_year}}</h2>
    <h3 id="{{ this_year }}-{{ this_month }}-ref">{{ this_month }}</h3>
    <ul>
    {% endif %}

    <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://server.makestories.io/preview/{{ post.storyid }}/">{{ post.title }}<span class="badge badge-secondary ml-1">{{ post.date | date: "%d.%m.%Y" }}</span></a></li>

    {% if forloop.last %}
    </ul>
    {% else %}
        {% if this_year != next_year %}
        </ul>
        <h2 id="{{ next_year }}-ref">{{next_year}}</h2>
        <h3 id="{{ next_year }}-{{ next_month }}-ref">{{ next_month }}</h3>
        <ul>
        {% else %}    
            {% if this_month != next_month %}
            </ul>
            <h3 id="{{ this_year }}-{{ next_month }}-ref">{{ next_month }}</h3>
            <ul>
            {% endif %}
        {% endif %}
    {% endif %}
{% endfor %}

<div class="fixed-bottom bg-dark text-white">
    <a class="btn btn-dark" href="https://nobodymr.github.io/stories_feed/assets/typehome.js" target="_blank" rel="noopener noreferrer nofollow">Typehome.js source</a>
    <a class="btn btn-dark" href="https://nobodymr.github.io/stories_feed/feed.xml" target="_blank" rel="noopener noreferrer nofollow">RSS latest 3</a>
    <a class="btn btn-dark" href="https://nobodymr.github.io/stories_feed/allfeeds.xml" target="_blank" rel="noopener noreferrer nofollow">RSS all posts</a>
</div>
