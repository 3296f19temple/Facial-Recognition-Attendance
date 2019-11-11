from django.db import models

class student(models.Model):
    username = models.TextField()
    first_name = models.TextField()
    last_name = models.TextField()
    school_id = models.CharField()
    attendence = models.CharField()




# class administrationUser(models.Model):
#     email = models.TextField()
#     username = models.TextField()
#     password = models.TextField()


