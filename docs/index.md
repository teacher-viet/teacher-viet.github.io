{% for file in site.static_files %}
  {% if file.extname == ".md" %}
    {% if file.name == "index" %}
      <a href="{{ site.baseurl }}/index.html">Home</a>
    {% else %}
      <a href="{{ site.baseurl }}/{{ file.name | remove_ext }}.html">{{ file.name | remove_ext | capitalize }}</a>
    {% endif %}
  {% endif %}
{% endfor %}
