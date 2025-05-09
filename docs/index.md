{% for file in site.static_files %}
  {% if file.extname == ".md" %}
    [{{ file.basename }}]({{ site.baseurl }}/{{ file.basename }}.html)
  {% endif %}
{% endfor %}

{% set current_page = 'index.html' %}
{% set display_name = 'Home' %}
{% if current_page == 'index.html' %}
  {{ display_name }}
{% else %}
  {{ current_page }}
{% endif %}
