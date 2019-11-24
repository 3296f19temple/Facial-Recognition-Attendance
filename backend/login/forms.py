from django import forms
'''
class createAdministrationUserForm(forms.Form):
    email = forms.TextField()
    username = forms.TextField()
    password = forms.TextField()
'''

class createStrudent(forms.Form):
    first_name = models.TextField()
    last_name = models.TextField()
    school_id = models.CharField()
    attendence = models.CharField()