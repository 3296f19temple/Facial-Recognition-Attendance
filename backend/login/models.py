from django.db import models
<<<<<<< HEAD
from djongo import models
import datetime

=======
from django.contrib.auth.models import User
>>>>>>> 4ae9374a7704fea371aaab383a4dfd693ae53306

class Classes(models.Model):
    courseId = models.IntegerField()
    courseName = models.TextField()
    meetingSchedule = models.TextField()
<<<<<<< HEAD

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
=======
    username  =  models.ForeignKey(User, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return '%d' %(self.courseId)

class Students(models.Model):
    courseId = models.ForeignKey(Classes, on_delete=models.CASCADE)
    first_name = models.TextField()
    last_name = models.TextField()
    school_id = models.CharField(max_length = 200)
    attendence = models.CharField(max_length = 800)

    def __str__(self):
       return '%d' %(self.courseId)

>>>>>>> 4ae9374a7704fea371aaab383a4dfd693ae53306
