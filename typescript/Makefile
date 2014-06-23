.PHONE: kill watch

input_file=index.ts
pid_file=.watch.pid

watch:
	nohup tsc -w '$(input_file)' >/dev/null 2>&1 & echo "$$!" >'$(pid_file)'

kill:
	kill "$$(cat '$(pid_file)')"
	rm -f '$(pid_file)'
