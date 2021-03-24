{% for file in site.static_files %}
{% if file.extname == ".htm" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
{% endif %}
{% endfor %}
