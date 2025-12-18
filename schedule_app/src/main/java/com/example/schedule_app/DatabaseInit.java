package com.example.schedule_app;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

@Component
public class DatabaseInit implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {

        // SQLiteファイルのパス
        String url = "jdbc:sqlite:schedule.db";

        // テーブル作成SQL
        String sql = """
                CREATE TABLE IF NOT EXISTS schedules (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT NOT NULL,
                    description TEXT,
                    date TEXT
                );
                """;

        try (Connection conn = DriverManager.getConnection(url);
             Statement stmt = conn.createStatement()) {

            stmt.execute(sql);
            System.out.println("★ schedules テーブル作成完了");
        }
    }
}