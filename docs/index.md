{% for file in site.static_files %}
{% if file.basename != "index" && file.extname ==".md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
{% endif %}
{% endfor %}
