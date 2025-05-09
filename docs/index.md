{% for file in site.static_files %}
{% if file.extname == ".md" | reject: "index.md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
{% endif %}
{% endfor %}
