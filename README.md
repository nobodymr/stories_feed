{% include head.html %}
<a href="https://nobodymr.github.io/stories_feed/assets/typehome.js" target="_blank" rel="noopener noreferrer nofollow">Typehome.js source</a>
<a href="https://nobodymr.github.io/stories_feed/feed.xml" target="_blank" rel="noopener noreferrer nofollow">RSS latest 3</a>
<a href="https://nobodymr.github.io/stories_feed/allfeeds.xml" target="_blank" rel="noopener noreferrer nofollow">RSS all posts</a>

<ul>
  {% for post in site.posts %}
    <li>
      <div id="{{ post.storyid }}" class="stories_trigger btn btn-block btn-link text-left shadow">{{ post.title }}<br><span class="badge badge-{% if (site.time == post.date) %}success{% else %}secondary{% endif %}">{{ post.date | date: "%d.%m.%Y" }}</span>
      </div>
      <a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
