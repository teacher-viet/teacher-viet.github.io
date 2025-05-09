{% for file in site.static_files %}
{% if file.name == "index.md" %}
[{{ Home }}]({{site.baseurl}}/{{index.html}})
% elsif file.ext == "*.md" %
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)}
{% endif %}
{% endfor %}
