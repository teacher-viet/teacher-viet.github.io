{% for file in site.static_files %}
{% unless file.name == "/index.md" %}
<a href="/index.html">Home</a>
{% elsif file.ext == "*.md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)}
{% endunless %}
{% endfor %}
