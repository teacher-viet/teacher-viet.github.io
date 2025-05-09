{% for file in site.static_files %}
{% if file.extname == ".md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
{% for file.index.html %}
[{{<a href="https://teacher-viet.github.io/index.html">Home</a>}}]
{% endif %}
{% endfor %}
