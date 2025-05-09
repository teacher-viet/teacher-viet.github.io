{% for file in site.static_files %}
{% unless file.name == "/index.md" %}
{% elsif file.ext == "*.md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)}
<a href="/index.html">Home</a>
{% endunless %}
{% endfor %}
