module.exports = {
    board_env: "STM32F103RE_creality",
    meta: {
        stable_name: "ender_3_max_neo-HW_4.2.2-{{marlin_version}}-{{uid}}",
        nightly_name: "ender_3_max_neo-HW_4.2.2-{{current_date}}-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/default/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
        enable: [
            // Configuration
            // ["CONFIG_EXAMPLES_DIR", "Creality/Ender-3 Max Neo"],

            // Motherboard Type
            ["MOTHERBOARD", q`BOARD_CREALITY_V4`],
            // "NO_AUTO_ASSIGN_WARNING",

            // Serial
            ["SERIAL_PORT", 1],
            ["BAUDRATE", 115200],

            // Machine Name
            ["CUSTOM_MACHINE_NAME", "Ender-3 Max Neo"],

            // Stepper Drivers
            ["X_DRIVER_TYPE", q`TMC2208_STANDALONE`],
            ["Y_DRIVER_TYPE", q`TMC2208_STANDALONE`],
            ["Z_DRIVER_TYPE", q`TMC2208_STANDALONE`],
            ["E0_DRIVER_TYPE", q`TMC2208_STANDALONE`],

            // Thermal Settings
            ["TEMP_SENSOR_BED", 1],
            ["HEATER_0_MINTEMP", 0],
            ["BED_MINTEMP", 0],
            ["BED_MAXTEMP", 120],

            // PID Settings
            ["DEFAULT_Kp_LIST", [20.30, 20.30]],
            ["DEFAULT_Ki_LIST", [1.75, 1.75]],
            ["DEFAULT_Kd_LIST", [58.00, 58.00]],
            ["DEFAULT_Kp", 20.30],
            ["DEFAULT_Ki", 1.75],
            ["DEFAULT_Kd", 58.00],

            // PID Bed Settings
            "PIDTEMPBED",
            ["DEFAULT_bedKp", 142.00],
            ["DEFAULT_bedKi", 17.25],
            ["DEFAULT_bedKd", 780.50],

            // Temperature Control
            ["EXTRUDE_MINTEMP", 180],
            ["EXTRUDE_MAXLENGTH", 1000],

            // End Stop Settings
            "ENDSTOP_INTERRUPTS_FEATURE",

            // Movement Settings
            ["DEFAULT_AXIS_STEPS_PER_UNIT", [80, 80, 400, 101]],
            ["DEFAULT_MAX_FEEDRATE", [180, 180, 5, 25]],
            ["MAX_FEEDRATE_EDIT_VALUES", [600, 600, 10, 50]],
            ["DEFAULT_MAX_ACCELERATION", [500, 500, 50, 1000]],
            ["DEFAULT_ACCELERATION", 500],
            ["DEFAULT_RETRACT_ACCELERATION", 500],
            ["DEFAULT_TRAVEL_ACCELERATION", 1000],
            "CLASSIC_JERK",
            ["DEFAULT_XJERK", 5.0],
            ["DEFAULT_YJERK", 5.0],
            ["DEFAULT_ZJERK", 0.3],

            // Z Probe Options
            "USE_PROBE_FOR_Z_HOMING",
            "BLTOUCH",
            ["NOZZLE_TO_PROBE_OFFSET", [-40, -12, 0]],
            ["PROBING_MARGIN", 40],
            ["XY_PROBE_FEEDRATE", q`(60*60)`],
            ["Z_PROBE_OFFSET_RANGE_MIN", -10],
            ["Z_PROBE_OFFSET_RANGE_MAX", 10],

            // Motion
            ["INVERT_X_DIR", false],
            ["INVERT_Y_DIR", false],
            ["INVERT_Z_DIR", true],

            // Geometry
            ["X_BED_SIZE", 300],
            ["Y_BED_SIZE", 300],
            ["X_MIN_POS", -24],
            ["Y_MIN_POS", -4],
            ["Z_MIN_POS", 0],
            ["X_MAX_POS", q`X_BED_SIZE`],
            ["Y_MAX_POS", q`Y_BED_SIZE`],
            ["Z_MAX_POS", 320],

            // Filament Runout Sensors
            "FILAMENT_RUNOUT_SENSOR",

            // Bed Leveling
            "AUTO_BED_LEVELING_BILINEAR",
            ["GRID_MAX_POINTS_X", 5],
            ["GRID_MAX_POINTS_Y", q`GRID_MAX_POINTS_X`],
            "EXTRAPOLATE_BEYOND_GRID",
            "Z_SAFE_HOMING",

            // EEPROM
            "EEPROM_SETTINGS",
            "EEPROM_AUTO_INIT",
            "EEPROM_INIT_NOW",

            // Preheat Constants
            ["PREHEAT_1_LABEL", "PLA"],
            ["PREHEAT_1_TEMP_HOTEND", 200],
            ["PREHEAT_1_TEMP_BED", 60],
            ["PREHEAT_1_TEMP_CHAMBER", 35],
            ["PREHEAT_1_FAN_SPEED", 255],

            ["PREHEAT_2_LABEL", "ABS"],
            ["PREHEAT_2_TEMP_HOTEND", 230],
            ["PREHEAT_2_TEMP_BED", 100],
            ["PREHEAT_2_TEMP_CHAMBER", 35],
            ["PREHEAT_2_FAN_SPEED", 255],

            // Nozzle Park
            "NOZZLE_PARK_FEATURE",

            // SD Support
            "SDSUPPORT",

            // LCD Support 
            ["ENCODER_PULSES_PER_STEP", 4],
            ["ENCODER_STEPS_PER_MENU_ITEM", 1],
            ["LCD_FEEDBACK_FREQUENCY_DURATION_MS", 2],
            ["LCD_FEEDBACK_FREQUENCY_HZ", 5000],
            "DWIN_CREALITY_LCD_JYERSUI",

            // Fans
            "FAN_SOFT_PWM"
        ],
        disable: [
            // Z Probe Options
            "Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN",

            // EEPROM
            "EEPROM_CHITCHAT",

            // LCD Support
            "DWIN_CREALITY_LCD"
        ]
    },
    configuration_adv: {
        enable: [
            // Configuration
            // ["CONFIG_EXAMPLES_DIR", "Creality/Ender-3 Max Neo"],

            // Thermal Settings
            ["FAN_MIN_PWM", 50],

            // Homing
            "QUICK_HOME",

            // Motion
            "ADAPTIVE_STEP_SMOOTHING",

            // Additional Features
            "PROBE_OFFSET_WIZARD",
            "POWER_LOSS_RECOVERY",

            // SD Card
            "SDCARD_SORT_ALPHA",
            ["SDSORT_LIMIT", 40],
            ["FOLDER_SORTING", -1],
            ["SDSORT_GCODE", false],
            ["SDSORT_USES_RAM", true],
            ["SDSORT_USES_STACK", false],
            ["SDSORT_CACHE_NAMES", true],
            ["SDSORT_DYNAMIC_RAM", true],
            ["SDSORT_CACHE_VFATS", 2],
            "SCROLL_LONG_FILENAMES",
            "NO_SD_HOST_DRIVE",

            // Stepping
            "BABYSTEPPING",
            "INTEGRATED_BABYSTEPPING",
            "BABYSTEP_WITHOUT_HOMING",
            "BABYSTEP_ALWAYS_AVAILABLE",
            "ADVANCED_PAUSE_FEATURE",
            "SQUARE_WAVE_STEPPING",

            // Host
            "HOST_ACTION_COMMANDS"
        ],
        disable: []
    }
};