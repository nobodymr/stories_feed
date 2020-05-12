{% include head.html %}
<a href="https://nobodymr.github.io/stories_feed/assets/typehome.js" target="_blank" rel="noopener noreferrer nofollow">Typehome.js source</a>
<a href="https://nobodymr.github.io/stories_feed/feed.xml" target="_blank" rel="noopener noreferrer nofollow">RSS latest 3</a>
<a href="https://nobodymr.github.io/stories_feed/allfeeds.xml" target="_blank" rel="noopener noreferrer nofollow">RSS all posts</a>

<ul>
{% for post in site.posts %}
<li>
<a rel="noopener noreferrer nofollow" target="_blank" href="https://server.makestories.io/preview/{{ post.storyid }}">{{ post.title }}<span class="badge badge-secondary">{{ post.date | date: "%d.%m.%Y" }}</span></div></a>
</li>
{% endfor %}
</ul>
