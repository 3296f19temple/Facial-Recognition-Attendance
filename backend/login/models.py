from django.db import models
from djongo import models
import datetime


class Classes(models.Model):
    courseId = models.IntegerField()
    courseName = models.TextField()
    meetingSchedule = models.TextField()

class Attendances(models.Model):
    attendanceTaken = models.BooleanField()
    attendanceTime = models.DateTimeField(default = datetime.datetime.now)

class Students(models.Model):
    studentID = models.IntegerField()
    studentName = models.TextField()
    studentPicture = models.FileField(blank=False, null=False)

    attendance = models.EmbeddedModelField(
        model_container = Attendances
        )
