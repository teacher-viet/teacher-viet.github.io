{% for file in site.static_files %}
  {% if file.extname == ".md" %}
    [{{ file.basename }}]({{ site.baseurl }}/{{ file.basename }}.html)
  {% endif %}
{% endfor %}

{% assign current_page = "index.html" %}
{% assign display_name = "Home" %}
{% if page.url == "/" or page.url == "/index.html" %}
  {{ display_name }}
{% else %}
  {{ page.title }}
{% endif %}
