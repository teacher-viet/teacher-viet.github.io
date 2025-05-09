{% for file in site.static_files %}
{% if file.ext == "*.md" %}
{% unless file.basename == "index.md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)}
{% endunless %}
{% endif %}
{% endfor %}
