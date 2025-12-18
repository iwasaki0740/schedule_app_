package com.example.schedule_app.repository;

import com.example.schedule_app.model.Schedule;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.stereotype.Repository;

@Repository
public class ScheduleRepository {

    private final List<Schedule> schedules = new ArrayList<>();
    private final AtomicInteger counter = new AtomicInteger(1);

    public List<Schedule> findAll() {
        return schedules;
    }

    public Schedule save(Schedule schedule) {
        schedule.setId(counter.getAndIncrement());
        schedules.add(schedule);
        return schedule;
    }

    public void deleteAll() {
        schedules.clear();
        counter.set(1);
    }
}