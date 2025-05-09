{% for file in site.static_files %}
{% if file.basename == "index.md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)}
<a href="/index.html">Home</a>
{% elsif file.ext == "*.md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)}
{% endif %}
{% endfor %}
