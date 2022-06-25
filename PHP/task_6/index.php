<?php
$user = ['name' => 'john', 'age' => 30];

if (isset($user['name'])) {
    $name = $user['name'];
} else {
    $name = 'unknown';
}
$name = isset($user['name']) ?? $name = $user['name'];

if (isset($user['name'])) {
    $result = $user['name'];
} elseif (isset($user['surname'])) {
    $result = $user['surname'];
} else {
    $result = '';
}
$result = isset($user['name']) ?? $result = $user['name'] ?? $result = $user['surname'] ?? $result = '';
