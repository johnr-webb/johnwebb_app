"""A Google Cloud Python Pulumi program"""

import pulumi
from pulumi_gcp import storage

# Create a GCP resource (Storage Bucket)
bucket = storage.Bucket('test-bucket-johnwebb-544', location="US")

# Export the DNS name of the bucket
pulumi.export('bucket_name', bucket.url)
