import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';

import '../provider.dart';

class PrimaryButton extends ConsumerWidget {
  const PrimaryButton({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final isDarkMode = ref.watch(isDarkThemeProvider);
    return Scaffold(
      appBar: AppBar(
        title: const Text('Primary Button'),
        centerTitle: true,
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 10.0),
            child: Switch(
                activeColor: Colors.grey,
                activeTrackColor: Colors.black45,
                inactiveThumbColor: Colors.white,
                inactiveTrackColor: Colors.grey,
                value: isDarkMode,
                onChanged: (value) {
                  ref.read(isDarkThemeProvider.notifier).state = value;
                }),
          ),
        ],
      ),
      body: Center(
        child: MaterialButton(
          height: 50,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
          color: isDarkMode ? Colors.white : Colors.black,
          onPressed: () {
            // Add your onPressed logic here
          },
          child: Text(
            'Primary Button',
            style: GoogleFonts.poppins(
                color: isDarkMode ? Colors.black : Colors.white, fontSize: 20),
          ),
        ),
      ),
    );
  }
}
