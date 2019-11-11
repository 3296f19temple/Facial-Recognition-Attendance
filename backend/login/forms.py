from django import forms
from django.contrib.auth import authenticate

'
class createStrudent(forms.Form):
    first_name = models.TextField()
    last_name = models.TextField()
    school_id = models.CharField()
    attendence = models.ArrayField()
    attendence = models.ArrayField()
