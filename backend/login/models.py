from django.db import models

class Classes(models.Model):
    courseId = models.IntegerField()
    courseName = models.TextField()
    meetingSchedule = models.TextField()
