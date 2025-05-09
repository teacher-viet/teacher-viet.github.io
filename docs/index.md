{% for file in site.static_files %}
{% unless file.basename == "index.md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
{% if file.basename == "/index.html" %}
<a href="/index.html">Home</a>
{% endif %}
{% endfor %}
{% endunless %}
