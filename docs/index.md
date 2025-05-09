{% for file in site.static_files %}
{% if file.extname == ".md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
{% endif %}
{% if page.file_name == 'index.html' %}Home{% else %}{{ page.title }}
{% endif %}
{% endfor %}
