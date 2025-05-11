<p style="text-align: center;">Welcome to Learn Vietnamese with Bao.

I have been teaching Vietnamese in Sydney since 2014 helping people build Vietnamese language familiarity and confidence ready to travel in Vietnam or communicate with their Vietnamese heritage partners and family members.

You can learn more about my services by following the Contact link at the bottom of this page.

This website gives you a taste of what you can learn to do at elementary level. If you already know some Vietnamese, then I hope that this website will give you a chance to practice and motivate you to learn more.

I enjoy teaching and I am very happy to have the chance to introduce my culture and language to you.</p>
<h3>Page listing</h3>
{% for file in site.static_files %}
{% if file.extname == ".md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
{% endif %}
{% endfor %}
