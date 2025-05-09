{% for file in site.static_files %}
{% if file.extname == ".md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
{% unless index.html %}
{% endunless %}
{% endif %}
{% endfor %}
