{% for file in site.static_files %}
  {% if file.extname == ".md" %}
    [{{ file.basename }}]({{ site.baseurl }}/{{ file.basename }}.html)
  {% endif %}
{% endfor %}

{% if page.url == "/index.html" %}
  {{ 'Home' }}
{% else %}
  {{ page.title }}
{% endif %}
