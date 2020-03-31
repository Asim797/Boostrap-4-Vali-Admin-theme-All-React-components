<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="description" content="Vali is a responsive and free admin theme built with Bootstrap 4, SASS and PUG.js. It's fully customizable and modular.">
    <!-- Twitter meta-->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:site" content="@pratikborsadiya">
    <meta property="twitter:creator" content="@pratikborsadiya">
    <meta name="_token" content="{{csrf_token()}}" />
    <!-- Open Graph Meta-->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Vali Admin">
    <meta property="og:title" content="Vali - Free Bootstrap 4 admin theme">
    <meta property="og:url" content="https://pratikborsadiya.in/blog/vali-admin">
    <meta property="og:image" content="https://pratikborsadiya.in/blog/vali-admin/hero-social.png">
    <meta property="og:description" content="Vali is a responsive and free admin theme built with Bootstrap 4, SASS and PUG.js. It's fully customizable and modular.">
    <title>Admin CMS | @yield('page-title')</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/png" href="/images/favicon.png" sizes="16x16"/>

    <!-- Main CSS-->
    <link rel="stylesheet" type="text/css" href="/css/main.css">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.12/dist/css/select2.min.css" rel="stylesheet" />
    <!-- Font-icon css-->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="/js/jquery-3.3.1.min.js"></script>
    <!-- Data table plugin-->
    <script type="text/javascript" src="/js/plugins/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="/js/plugins/dataTables.bootstrap.min.js"></script>
</head>
<body class="app sidebar-mini">
<div id="app"></div>

@yield('main-content')

<!-- Essential javascripts for application to work-->
<script src="/js/popper.min.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/main.js"></script>
<!-- The javascript plugin to display page loading on top-->
<script src="/js/plugins/pace.min.js"></script>
<script async defer src="{{asset("dist/home/vendors~main.bundle.js")}}"></script>
<script async defer src="{{asset("dist/home/bundle.js")}}"></script>
</body>
</html>
