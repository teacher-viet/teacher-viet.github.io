{% for file in site.static_files %}
{% if file.name == "/index.md" %}
<a href="/index.html">Home</a>
{% else file.ext == "*.md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)}
{% endif %}
{% endfor %}
