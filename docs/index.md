<p style="text-align: center;">Welcome to Learn Vietnamese with Bao.</p>

<p style="text-align: center;">I have been teaching Vietnamese in Sydney since 2014, helping people build Vietnamese language familiarity and confidence ready to travel in Vietnam, or communicate with their Vietnamese heritage partners and family members.</p>

<p style="text-align: center;">You can learn more about my services by following the <a href="https://www.tutorfinder.com.au/tutors/detail.php?TutorID=49762">Contact</a> link at the bottom of this page.</p>
<p style="text-align: center;"><h3>About this website</h3></p>
<p style="text-align: center;">This website gives you a taste of what you can learn to do at elementary level.</p>
<p style="text-align: center;">If you already know some Vietnamese, then I hope that this website will give you a chance to practice and motivate you to learn more.</p>

<p style="text-align: center;">I enjoy teaching and I am very happy to have the chance to introduce my culture and language to you.</p>
<p style="text-align: center;"><h3>Page listing</h3></p>
<p style="text-align: center;">{% for file in site.static_files %}
{% if file.extname == ".md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
{% endif %}
{% endfor %}</p>
