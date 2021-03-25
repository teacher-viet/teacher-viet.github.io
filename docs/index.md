{% for file in site.static_files %}
{% if file.name != "index.md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
{% endif %}
{% endfor %}
