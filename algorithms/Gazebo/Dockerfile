FROM gazebo:gzserver8
CMD [ "gzserver", "my-gazebo-app-args" ]

RUN apt-get update && apt-get install -y curl
RUN curl -o double_pendulum.sdf http://models.gazebosim.org/double_pendulum_with_base/model-1_4.sdf
RUN gz model --model-name double_pendulum --spawn-file double_pendulum.sdf

RUN gz log --record 1

RUN sleep 60;gz log --record 0



ENV DISPLAY :1.0
ENV LENGTH 20
ENV RESOLUTION 320x240
ENV FRAMERATE 20

COPY ./entrypoint.sh .
RUN ["chmod", "+x", "entrypoint.sh"]

