package com.example.schedule_app.sqlite;

import java.sql.*;

public class Database {

    private static final String URL = "jdbc:sqlite:schedule.db";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL);
    }

    public static void init() {
        try (Connection conn = getConnection();
             Statement st = conn.createStatement()) {

            st.execute("""
                CREATE TABLE IF NOT EXISTS tasks (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT NOT NULL,
                    date TEXT
                );
            """);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}