import 'package:flutter/material.dart';
import 'package:flutter_code/components/primarybutton.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'provider.dart';

void main() {
  runApp(const ProviderScope(child: MyApp()));
}

class MyApp extends ConsumerWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final isDarkMode = ref.watch(isDarkThemeProvider);

    return MaterialApp(
      theme: ThemeData(
        brightness: isDarkMode ? Brightness.dark : Brightness.light,
      ),
      home: const PrimaryButton(),
    );
  }
}
