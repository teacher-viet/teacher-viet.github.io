{% for file in site.static_files %}
{% if file.extname == ".md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
exclude:
        - "index.md"
{% endif %}
{% endfor %}
