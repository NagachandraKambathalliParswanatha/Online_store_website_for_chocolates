#!/usr/bin/perl
#  kambathalli parswanatha, Nagachandra Account:jadrn023
#  CS545 Fall 2017
#  Project #4



use CGI;
use DBI;
use File::Path;
use CGI::Cookie

$q = new CGI;


#send a blank cookie.  You must insert this into the header before
#printing anything.  Also, using the CGI module makes printing
#content-type: text/html redundant.

my $cookie = $q->cookie(-name=>'jadrn023',-value=>'',-path=>'/~jadrn023/proj4/');
print $q->header(-cookie=>$cookie);
print <<END_CONTENT;
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <title>Bertha's Chocolates </title>
    <link href='http://fonts.googleapis.com/css?family=Crete+Round' rel='stylesheet' type='text/css'>
     <link rel="stylesheet" type="text/css" href="/~jadrn023/proj4/MyStyle.css">
    <link rel="stylesheet" type="text/css" href="/~jadrn023/proj4/Confirmation.css">
   <!-- <link rel="stylesheet" type="text/css" href="product.css">-->
    <script src="http://jadran.sdsu.edu/jquery/jquery.js"></script>
</head>
<body>
<div class="wrapperHeader">
    <h1 class = "Heading">Bertha's Deluxe<span class="color"> Chocolates</span>.</h1>
    <div id="items">
        <a id="a-bag" href="#">
            <img class="cart"
                 src="/~jadrn023/proj4/cartt.png"/>
            <h5 class="h3_bag"><span id="count">0</span></h5>
        </a>
    </div>
</div>
<div class="topnav" id="myTopnav">
    <a href="/~jadrn023/proj4/index.html">Home</a>
    <a href="/~jadrn023/proj4/Products.html">Products</a>
    <a href="/~jadrn023/proj4/orderonline.html" >OrderOnline</a>
    <a href="/~jadrn023/proj4/AboutUS.html">About US</a>
    <a href="/~jadrn023/proj4/Contact.html">Contact</a>
</div>
<div>
END_CONTENT
my %cookies = $ENV{COOKIE};

print "<h1>Order Confirmed</h1>\n";
print "<hr/>\n";
my ($key, $value);
foreach $key ($q->param)
        {
            if ($key =~ /SKUNumber/) {
                foreach $value ($q->param($key)) {
                    if ($value ne "") {
                        push(@SKUArray, $value);

                    }
                }
            }
            if ($key =~ /Quantity/) {
                foreach $value ($q->param($key)) {
                    push(@QtyArray, $value);
                }
            }
        }

foreach $key ($q->param) {
        if($key eq fname)
        {

            foreach $value ($q->param($key))
            {
                    print "<h3>Hi! $value Thank You for shopping with Us</h3>\n";
                    print "<h3>Your Order will be delivered with in 3-5 working days</h3>\n";
            }
        }

        if($key eq address1)
        {
            print "<table>\n";
            print "<th><u><b>Shiping address</u></b></th><th></th><th></th>\n";
            foreach $value ($q->param($key)) {
                print "<tr><td>$value</td>\n";
                }
            print "</tr>\n";
        }
        if($key eq city)
                {
                    print "<tr>\n";

                    foreach $value ($q->param($key))
                        {
                        print "<td>$value</td>\n";
                        }

                }


        if($key eq state)
                {


                    foreach $value ($q->param($key))
                    {
                    print "<td>$value</td>\n";
                    }

                }
        if($key eq zip)
                {


                  foreach $value ($q->param($key)) {
                  print "<td>$value</td>\n";
                  }
                  print "</tr>\n";
                }
                }
    foreach $key ($q->param) {

            if($key eq CardType)
                    {

                        print "<th><u><b>Charged To:</u></b></th><th></th><th></th>\n";
                        foreach $value ($q->param($key)) {
                            print "<tr><td>$value</td>\n";
                            }
                        print "</tr>\n";
                    }
            if($key eq cardno)
            {
                    print "<tr>\n";

                    foreach $value ($q->param($key)) {
                            $sub = substr($value, 12, 4);
                        print "<td>XXXX-XXXX-XXXX-$sub</td>\n";
                        }
                    print "</tr>\n";
            }
        }
print "</table>\n";

print <<END_CONTENT;
    <div>

        <a id = "Tor" href="/~jadrn023/proj4/index.html">Home Page</a>
        <a id = "Tol" href="/~jadrn023/proj4/Products.html">Continue shopping</a>
    </div>
END_CONTENT

my $name = "jadrn023";
my $pwd = "briefcase";
my $db_src = "dbi:mysql:jadrn023:opatija.sdsu.edu:3306";
my $query_to_execute;

my $dbh = DBI->connect($db_src, $name, $pwd)
    or die 'Cannot connect to db';

    my $date = localtime();

if (@SKUArray) {

    for (my $count = 0; $count < @SKUArray; $count++) {


        $query_to_execute = $dbh->prepare("INSERT INTO CustomerInformation(Date,sku,Quantity) VALUES
       ('$date','$SKUArray[$count]','$QtyArray[$count]')");
        $query_to_execute->execute();

    }
    $query_to_execute->finish();
}
$dbh->disconnect();
undef @SKUArray;
print "</div>\n";
print "</body>\n";
print "</html>\n";
