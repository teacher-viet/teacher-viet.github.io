{% for file in site.static_files %}
{% if file.extname == ".md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
{% endif %}
{% endfor %}

{% unless file.basename == "index.html" %}
<a href="/index.html">Home</a>
{% endunless %}
