<h3>Welcome to Learn Vietnamese with Bao.</h3>
I have been teaching Vietnamese in Sydney since 2014, helping people build Vietnamese language familiarity and confidence ready to travel in Vietnam, or communicate with their Vietnamese heritage partners and family members.

You can learn more about my services by following the <a href="https://www.tutorfinder.com.au/tutors/detail.php?TutorID=49762">Contact</a> link at the bottom of this page.
<h3>About this website</h3>
This website gives you a taste of what you can learn to do at elementary level.

If you already know some Vietnamese, then I hope that this website will give you a chance to practice and motivate you to learn more.

I enjoy teaching and I am very happy to have the chance to introduce my culture and language to you.
<h3>Page listing</h3>
{% for file in site.static_files %}
{% if file.extname == ".md" %}
[{{ file.basename }}]({{site.baseurl}}/{{file.basename}}.html)
{% endif %}
{% endfor %}
