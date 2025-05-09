{% for file in site.static_files %}
{% unless file.basename == "index.md" %}
{% if file.ext == "*.md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)}
{% endif %}
{% endunless %}
{% endfor %}
