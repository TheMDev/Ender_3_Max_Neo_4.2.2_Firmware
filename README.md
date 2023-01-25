# Ender 3 Max Neo 4.2.2 Firmware

Automatic [Marlin](https://github.com/MarlinFirmware/Marlin) builds for the Ender 3 Max Neo with the stock STM32F103RE Creality 4.2.2(512K) board and DACAI Display.  
You can find both stable and nightly (`bugfix-2.1.x`) downloads on the repository releases.  

## Main Board Firmware Update

1. A microSD card (FAT32-formatted with a “4096 byte” allocation size), at least 4 GB.

2. Put the firmware bin file onto the microSD card.

3. Turn off the printer and insert the microSD card into the slot on the main board.  

4. Reboot and wait for the update to finish.

5. After the update finishes, remove the microSD card and delete the files inside.

## Display Firmware Update

1. A microSD card (FAT32-formatted with a “4096 byte” allocation size), at least 4 GB.

2. Download latest Ender 3 Max Neo Firmware from Creality.
    
3. Extract the file "private" folder and "firmware.zlib" onto the SD card.

4. Download the correct [Marlin Configurations](https://github.com/MarlinFirmware/Configurations) for your firmware version. Navigate to `config/examples/Creality/Ender-3 V2/LCD Files/private/icon`
    
    Copy the contents of the icon folder to the `private/icon` folder on the SD card.

    * Note: Check for hidden files that may be added by your OS inside the private folder when copying. The Display will think they are part of the firmware and result in the error: `private is too big (1.1MB) > (1.0MB)! ERROR!!!`

5. Turn off the printer and insert the microSD card into the slot on the back of the display.

6. Reboot and wait for the update to finish.

    * If the update fails with any of the following errors [Display Firmware Update Error Fix](#display-firmware-update-error-fix) may help.
        ```
        private is too big (1.1MB) > (1.0MB)! ERROR!!!
        write 3:/image/0.jpg failed!
        write 3:/truefont/font.ttf failed!
        ```

7. After the update finishes, remove the microSD card and delete the files inside.

## Display Firmware Update Error Fix

1. A microSD card (FAT32-formatted with a “4096 byte” allocation size), at least 4 GB.


2. Download the following Ender 3 Max Neo Firmwares from Creality.
    ```
    Ender 3-Max Neo-Marlin2.0.8.3-HW-V4.2.2-SW-V1.4.1_C-20221020
    Ender3-Max Neo-Marlin2.0.8.3-HW-V4.2.2-SW-V1.4.0(English-Japanese)
    ```

3. Extract the file "private" folder and "firmware.zlib" from `SW-V1.4.1` onto the SD card.

4. Delete the contents of `private/icon` and `private/truefont` from the SD card.

5. Copy the contents of the icon folder from `SW-V1.4.0` to the `private/icon` folder on the SD card.

6. Download the correct [Marlin Configurations](https://github.com/MarlinFirmware/Configurations) for your firmware version. Navigate to `config/examples/Creality/Ender-3 V2/LCD Files/private/icon`

    Copy the contents of the icon folder to the `private/icon` folder on the SD card.

    Copy the contents of the truefont folder to the `private/truefont` folder on the SD card.

7. Turn off the printer and insert the microSD card into the slot on the back of the display.

8. Reboot and wait for the update to finish.

9. After the update finishes, remove the microSD card and delete the files inside.

## Support 

Feel free to start a [discussion](https://github.com/TheMDev/Ender_3_Max_Neo_4.2.2_Firmware/discussions) for any questions or improvements.

You may also be able to get support in the 
[Creality Ender 3 Discord](https://discord.gg/c7wmQMV)

## Build you own firmware

Check out [Marlin auto build](https://github.com/zisismaras/marlin_auto_build) if you want to build your own firmware automatically on github.