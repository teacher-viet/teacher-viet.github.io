{% for file in site.static_files %}
{% if file.extname == ".md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
{% if page.file_name == 'index' %}Home{% else %}{{ page.title }}{% endif %}
{% endif %}
{% endfor %}
